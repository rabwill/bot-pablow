# PAB-Low

The low code Personal Assistant Bot.

## Pre-requisites

- [Microsoft Azure Subscription](https://azure.microsoft.com/)
- [Bot composer](https://docs.microsoft.com/en-us/composer/quickstart-create-bot?WT.mc_id=m365-10080-cxa)
- [ngrok](https://ngrok.com/download)
- [Bot emulator](https://github.com/Microsoft/BotFramework-Emulator)

## Bot channel registration

- Create a bot channel registration as per the instructions [here](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-quickstart-registration?view=azure-bot-service-4.0&WT.mc_id=m365-10080-cxa)
- Copy the Microsoft App ID and create a password and copy it to a notepad for later.

## Set up OAuth Connection settings in the Bot Channel registration

- Once the Bot channel registration is done. Locate **Configuration** in the **Settings** in the left hand navigation.
- In the `Configuration` page you will see a button `Add OAuth Connection Settings`, select the button.
- Fill in a name for the connection.
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
- Login in to the tenant from the composer
- Inside the trigger, update the **OAuth login** action, by updating the **Connection name** of the action with the connection name given to the `OAuth Connection` which was added in the Bot channel registration's configuration.

## Test the bot

- From the composer select, `Start bot`
- Once started the composer asks whether to use `Bot emulator` to test it.
- Select the link that says `Test in emulator`
- Now test your bot in the emulator
- Type `Hello`
- The bot will provide a login button, select the button and sign in to the tenant.
- The bot will reply back with `Hello there {your name}`.
