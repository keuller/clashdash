package routes

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"time"

	"glash/dto"

	"github.com/labstack/echo"
)

func clanInfo(ctx echo.Context) error {
	client := &http.Client{
		Timeout: 3 * time.Second,
	}

	resp, err := client.Get("http://api.cr-api.com/clan/2YQ8UQC")
	if err != nil {
		return ctx.String(http.StatusBadGateway, err.Error())
	}
	defer resp.Body.Close()

	buffer, _ := ioutil.ReadAll(resp.Body)

	var clan dto.Clan
	json.Unmarshal(buffer, &clan)

	return ctx.JSON(http.StatusOK, clan)
}
