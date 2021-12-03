Currently the lambda function for creating a Stripe checkout session (and the corresponding Gateway API) is housed 
directly in the AWS Console, not in this project.

AWS auth tokens must be refreshed regularly. To do this:

1. Log in to backend Amplify studio (this happens in a popup, so you may need to allow that popup)
2. Verify that an API token exists
2. Run CLI command `amplify api update`
3. CLI will prompt you to log in via the browser, if you have already logged in to Amplify Studio you should just 
accept the login request in the browser.
4. Once you're logged in answer the questions in CLI prompted by API update

? Please select from one of the below mentioned services: (Use arrow keys)
? Please select from one of the below mentioned services: GraphQL

? Select from the options below (Use arrow keys)
? Select from the options below Update auth settings

? Choose the default authorization type for the API (Use arrow keys)
? Choose the default authorization type for the API API key

? Enter a description for the API key:
? Enter a description for the API key:

? After how many days from now the API key should expire (1-365): (7) 60
? After how many days from now the API key should expire (1-365): 60

? Configure additional auth types? (y/N) N
? Configure additional auth types? No