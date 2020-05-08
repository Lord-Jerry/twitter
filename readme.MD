# Twitter clone
A replica of twitter

# Aim 
 - make use of microservices for this project
 - improve my frontend (esp: Css) skill by trying to replicate twitter's frontend
 - improve my backend and devops skill

# Technologies
 - Server
   - NodeJs (ExpressJs, Sequelize)
   - postgreSql
   - Golang (Fiber, Gorm)
   - ruby (rails) [Probably]
 - Client
   - ReactJs
 - Docker
 
# Services 
 - Server
   - Cisco [Nodejs]: 
      - Handles authentication
      - user profile
      - serves as proxy to the other services.
   - Canary [Nodejs]:
      - Handles anything related to tweets (tweets, retweets, likes, e.t.c)
      - Handles user following. 
      - Handles bookmarking 
   - Slade [Golang]: 
      - Handles notifications, messages, lists