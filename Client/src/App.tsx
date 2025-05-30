import { useReducer, useEffect, useMemo } from 'react'
import Form from "./components/Form"
import { activityReducer, initialState } from './reducers/activity-reducer'
import ActivityList from './components/ActivityList'
import CalorieTracker from './components/CalorieTracker'

function App() {

    const [state, dispatch] = useReducer(activityReducer, initialState)

    useEffect(() => {
        localStorage.setItem('activities', JSON.stringify(state.activities))
    }, [state.activities])

    const canRestartApp = () => useMemo(() => state.activities.length, [state.activities])
    
    return (
        <>
            <header className="relative py-3">
    {/* Capa verde semi-transparente */}
    <div className="absolute top-0 left-0 w-full h-full bg-blue-500"></div>
    
    <div className="max-w-4xl mx-auto flex justify-between items-center relative z-20">
        <h1 className="text-center text-lg font-bold text-white uppercase">
            CONTADOR DE CALORÍAS
        </h1>

        <button
            className='bg-blue-500 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10'
            disabled={!canRestartApp()}
            onClick={() => dispatch({type: 'restart-app'})}
        >
            Reiniciar App
        </button>
    </div>
</header>

            <section className="bg-blue-300 opacity-70 z-10">
                <div className="max-w-4xl mx-auto">
                    <Form 
                        dispatch={dispatch}
                        state={state}
                    />
                </div>
            </section>

            <section className='bg-blue-400 py-10'>
                <div className='max-w-4xl mx-auto'>
                    <CalorieTracker 
                        activities={state.activities}
                    />
                </div>
            </section>

            <section className="p-10 mx-auto max-w-4xl">
                <ActivityList 
                    activities={state.activities}
                    dispatch={dispatch}
                />
            </section>
        </>
    )
}

export default App
