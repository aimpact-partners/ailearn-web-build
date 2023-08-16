# Para publicar la Web AIlearn

## URL de la aplicacion web

development []

testing [https://ailearn-test.netlify.app/]

production []

## Actualizar propiedades de urls cloud en la propiedad "params" del package.json

Hay 2 opciones

-   Actualizarlas en el `package.json`, previo a la compilacion

-   Actualizarlas en el archivo `config.js`, luego de la compilacion

```json
{
	"params": {
		"url": "https://documents-rb5caohzgq-wl.a.run.app/upload",
		"DOCUMENTS_SERVER": "https://documents-rb5caohzgq-wl.a.run.app",
		"CHAT_API_SERVER": "ACTUALIZAR - URL DE CLOUD RUN/chat-api-uploader"
	}
}
```

## En el codigo ya compilado, agregar el backend al paquete chat-api para que apunte a la url del AppEngine

Ruta del archivo desde la raiz de la compilacion: `/packages/@aimpact/chat-api@0.0.1/config.json`

`NOTA: esta url corresponde a la url del app engine`

En este mismo archivo, validar que la url del agente apunte a la cloud function en la propiedad `AGENTS_SERVER` dentro
de la propiedad `"params"`

```json
	"AGENTS_SERVER": "https://agent-api-rb5caohzgq-uc.a.run.app/agent"

	"backend": {
		"host": "ACTUALIZAR - URL DE CLOUD RUN de CHAT-API"
	}
}
```
