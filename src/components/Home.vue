<template>
  <v-container>
    <h1>Bienvenido</h1>
    <p>
        En esta aplicación usted puede:
        <v-list two-line>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Crear Usuarios</v-list-item-title>
                    <v-list-item-subtitle>¡Registre un usuario con username unico, datos personales, descripción y enlace de imagen!</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Visualizar Usuarios</v-list-item-title>
                    <v-list-item-subtitle>Puede ver en una tabla todos los usuarios que existen en la base de datos MongoDB, y puede ver sus perfiles individuales.</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Actualizar Usuarios</v-list-item-title>
                    <v-list-item-subtitle>¿Algo no le parece? Puede cambiar el usuario.</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Eliminar Usuarios</v-list-item-title>
                    <v-list-item-subtitle>Si nadie va a volver a usar ese usuario, pues ya es momento que vaya eliminando eso.</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </p>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>