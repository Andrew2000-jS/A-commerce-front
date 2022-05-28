import { useEffect, useState } from 'react'
import mockData from '../../mockData'

export default function useChangeInfo(reviews = '', show = 'description') {
  const [state, setState] = useState({
    description: '',
    additional_information: '',
    reviews,
    show
  })

  useEffect(() => {
    setState({
      ...state,
      description: mockData.description,
      additional_information: mockData.additional_information
    })
  }, [])

  const setShow = (item) => setState({ ...state, show: item })

  return { state, setShow }
}
