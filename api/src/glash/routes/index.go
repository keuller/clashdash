package routes

import (
	"net/http"

	"github.com/labstack/echo"
)

// Register -
func Register(app *echo.Echo) {
	app.File("/", "index.html")
	app.Static("/dist", "dist")
	app.GET("/clan", clanInfo)
}

func home() echo.HandlerFunc {
	return func(ctx echo.Context) error {
		return ctx.JSON(http.StatusOK, "OK")
	}
}
