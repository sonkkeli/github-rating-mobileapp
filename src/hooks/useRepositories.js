import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  return {
    repositories: data
      ? data.repositories
        ? data.repositories.edges.map((edge) => edge.node)
        : []
      : null,
    loading,
    refetch,
  };
};

export default useRepositories;