import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./api/users";
import {
  FlatList,
  View,
  Text
} from "react-native";
import { styles } from "./styles";

export default function Main() {
  // criando useQuery para pegar os usuários
  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers
  });

  // tratamento de carregamento de página
  if (isLoading)
    return (
      <View style={styles.center}>
        <Text style={styles.loadingText}>Carregando usuários...</Text>
      </View>
    );

  // tratamento de erro
  if (isError)
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Erro ao carregar usuários</Text>
      </View>
    );

  return (
    <View style={styles.container}>

      <Text style={styles.subtitle}>Lista de Usuários</Text>
      <FlatList
        data={data}
        refreshing={isFetching}
        onRefresh={refetch}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.userName}>Nome: {item.name}</Text>
            <Text style={styles.userEmail}>Email: {item.email}</Text>
            <Text style={styles.userCity}>
              {item.address? `Cidade: ${item.address.city}`  : "Cidade não informada"}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

