package dto

type Clan struct {
	Name        string   `json:"name"`
	Badge       int32    `json:"badge"`
	BadgeURL    string   `json:"badge_url"`
	MemberCount int      `json:"memberCount"`
	Score       int      `json:"score"`
	Donations   int      `json:"donations"`
	Description string   `json:"description"`
	Region      Region   `json:"region"`
	Members     []Member `json:"members"`
}

type Region struct {
	Name string `json:"name"`
}

type Arena struct {
	Image string `json:"imageURL"`
	Name  string `json:"arena"`
}

type Member struct {
	Name            string `json:"name"`
	Tag             string `json:"tag"`
	Arena           Arena  `json:"arena"`
	Score           int    `json:"score"`
	Donations       int    `json:"donations"`
	ClanChestCrowns int    `json:"clanChestCrowns"`
	Role            string `json:"roleName"`
}
