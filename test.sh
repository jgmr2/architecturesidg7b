#!/bin/bash

# Configuración inicial
API_URL="http://localhost:3000/api"
EMAIL="testuser@example.com"
PASSWORD="password123"
NAME="Test User"

echo "--- Iniciando pruebas de UrbanAlert API ---"

# 1. Registro de Usuario
echo "1. Registrando usuario..."
REGISTER_RES=$(curl -s -X POST "$API_URL/auth/registrar" \
     -H "Content-Type: application/json" \
     -d "{\"nombre\": \"$NAME\", \"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")

echo "Respuesta registro: $REGISTER_RES"
echo "-----------------------------------"

# 2. Login de Usuario
echo "2. Autenticando usuario..."
LOGIN_RES=$(curl -s -X POST "$API_URL/auth/login" \
     -H "Content-Type: application/json" \
     -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")

# Extraer el token (Requiere jq)
TOKEN=$(echo $LOGIN_RES | jq -r '.token')

if [ "$TOKEN" == "null" ] || [ -z "$TOKEN" ]; then
    echo "Error: No se pudo obtener el token. Revisa si el usuario ya existe o si los datos son correctos."
    exit 1
fi

echo "Token obtenido exitosamente."
echo "-----------------------------------"

# 3. Crear un reporte (Persistencia en DB)
echo "3. Creando un reporte de bache..."
curl -s -X POST "$API_URL/reportes" \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer $TOKEN" \
     -d '{
           "titulo": "Bache gigante en la entrada",
           "descripcion": "Hay un bache que ocupa medio carril frente a la universidad.",
           "ubicacion": "Av. El Retoño 123"
         }'

echo -e "\nReporte enviado."
echo "-----------------------------------"

# 4. Obtener todos los reportes para verificar persistencia
echo "4. Consultando todos los reportes en la base de datos..."
curl -s -X GET "$API_URL/reportes" \
     -H "Authorization: Bearer $TOKEN" | jq .

echo -e "\n--- Pruebas finalizadas ---"