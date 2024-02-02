import useSWR from "swr";

export function useProperty ({ id }) {
  const { data, error } = useSWR(`/competitors?id=${id}`)
  const [ property ] = data?.response || []

  return {
    property,
    isLoading: !error && !data
  }
}