import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 18,
    color: "#555"
  },
  errorText: {
    fontSize: 18,
    color: "red"
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },
  input: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#DDD"
  },
  card: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2 // sombra no Android
  },
  userId: {
    fontSize: 12,
    color: "#888"
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold"
  },
  userEmail: {
    fontSize: 14,
    color: "#555"
  },
  userCity: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10
  }
});