import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goals'
import { Summary } from './components/summary'
import { EmptyGoals } from './components/empty-goals'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  // const { data } = useQuery<TSummary>({
  //   queryKey: ['summary'],
  //   queryFn: async () => {
  //     const response = await fetch('http://localhost:3333/summary')
  //     const data = await response.json()

  //     return data.summary
  //   },
  // })

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, //60 segundo //ele guarda em cache a resposta, evitando assim a busca sempre varias vezes, no nosso caso vai busca a cada 1min
  })

  return (
    <Dialog>
      {data?.total ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
