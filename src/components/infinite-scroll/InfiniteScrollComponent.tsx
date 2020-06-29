import React, { useEffect, useRef, useCallback } from 'react'
import IAction from '../../models/IActions'

interface IProps {
  id: string
  pagerDispatch: React.Dispatch<IAction>
}

const InfiniteScrollComponent = ({ id, pagerDispatch } : IProps) => {
  // implement infinite scrolling with intersection observer
  let bottomBoundaryRef = useRef(null)
  const scrollObserver = useCallback(
    node => {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.intersectionRatio > 0) {
            pagerDispatch({ type: 'ADVANCE_PAGE' })
          }
        })
      }).observe(node)
    },
    [pagerDispatch],
  )

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current)
    }
  }, [scrollObserver, bottomBoundaryRef])

  return (
    <div
      id={id}
      style={{ border: '1px solid red' }}
      ref={bottomBoundaryRef}></div>
  )
}

export default InfiniteScrollComponent
