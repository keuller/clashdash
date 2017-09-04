package main

import (
	"fmt"
	"glash/routes"
	"os"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	app := echo.New()

	app.Use(middleware.Gzip())

	httpPort := os.Getenv("APP_PORT")
	if httpPort == "" {
		httpPort = "5000"
	}

	routes.Register(app)

	app.Start(fmt.Sprintf(":%s", httpPort))
}
