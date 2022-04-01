import type { FC } from 'react'
import { useEffect, useMemo } from 'react'
import { useFullScreenHandle } from 'react-full-screen'
import { useLocation } from 'react-router-dom'

interface KLDescriptionFactoryProps {}

export const KLDescriptionFactory: FC<KLDescriptionFactoryProps> = () => {
  const handle = useFullScreenHandle()
  const { search } = useLocation()

  useEffect(() => {}, [])

  const renderItem = useMemo(() => {}, [])

  return <div>KLDescriptionFactory</div>
}
