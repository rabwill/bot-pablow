# PAB-Low

The low code Personal Assistant Bot.

## Pre-requisites

- [Microsoft Azure Subscription](https://azure.microsoft.com/)
- [Bot Composer](https://docs.microsoft.com/en-us/composer/quickstart-create-bot?WT.mc_id=m365-10080-cxa)
- [ngrok](https://ngrok.com/download)
- [Bot Framework Emulator](https://github.com/Microsoft/BotFramework-Emulator)

## Bot channel registration

- Create a bot channel registration as per the instructions [here](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-quickstart-registration?view=azure-bot-service-4.0&WT.mc_id=m365-10080-cxa)
- Copy the Microsoft App ID and create a password and copy it to a notepad for later.

## Set up OAuth Connection settings in the Bot Channel registration

- Once the Bot channel registration is done. Locate **Configuration** in the **Settings** in the left hand navigation.
- In the `Configuration` page you will see a button `Add OAuth Connection Settings`, select the button.
- Fill in a name for the connection - remember it you will need it later
- Choose `Azure Active Directory V2` as the **Service Provider**.
- Paste the **Client id** and **Client secret** which you copied earlier into their respective text boxes.
- Paste `https://token.botframework.com/.auth/web/redirect` in the `Token Exchange URL`  
- Copy and paste the `Tenant ID` of you current tenancy which is the ID of you **Azure Active Directory** into the **Tenant Id** text box.
- Paste `openid profile User.Read` into the **Scopes** text box.

## Set up the project

- Clone this project to a folder.
- Start tunnelling with ngrok by using below script

    ```powershell
    ngrok http 3980
    ```

- Copy the url from the ngrok command.
- Go to the Bot channel registration and locate **Configuration**
- Paste the url with `/api/messages` in the **Messaging endpoint** field.
- Open the clone folder `bot-pablow` using the Bot composer.
- Go to the project settings in the composer and update the **App Id** and the **Secret** with what was copied into the notepad.
- Go into "advanced mode" in project settings and add a property called `oauthConnectionName` with the connection name from the Bot registration:
    ```json
    "oauthConnectionName": "your connection name here",
    ```

## Test the bot

- From the composer select, `Start bot`
- Once started the composer asks whether to use `Bot emulator` to test it.
- Select the link that says `Test in emulator`
- Now test your bot in the emulator
- Type `What's next?`
- The bot will provide a login button, select the button and sign in to the tenant.
- The bot should display your todo items and upcoming events.
## Build the app package

- Open PowerShell and navigate to the `/manifest` folder
- Run this script:

    ```powershell
    ./Build-Manifest
    ```

   This will generate two files: manifest.json and pablow.zip. The manifest is based on the contents of `manifest.template.json` and the Bot ID is read from Bot Composer settings.
- Upload the pablow.zip file to Teams and install Pablow!