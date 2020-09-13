const { ClientSecretCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const KVUri = `https://${process.env.AZURE_KEY_VAULT_NAME}.vault.azure.net`;

const credential = new ClientSecretCredential(process.env.AZURE_TENANT_ID, 
                                              process.env.AZURE_CLIENT_ID,
                                              process.env.AZURE_CLIENT_SECRET);
const client = new SecretClient(KVUri, credential);

async function getSecrets() {

  let keyVaultSecrets = {
    'auth0Domain': '',
    'auth0ClientId': '',
    'auth0Secret': '',
    'recaptchaSiteKey': '',
    'recaptchaSecretKey': '',
    'googleMapsApiKey': '',
    'wodifyUser': '',
    'wodifyPassword': ''
  };

  const KVUri = `https://${process.env.AZURE_KEY_VAULT_NAME}.vault.azure.net`;

  const credential = new ClientSecretCredential(process.env.AZURE_TENANT_ID, 
                                                process.env.AZURE_CLIENT_ID,
                                                process.env.AZURE_CLIENT_SECRET);
  const client = new SecretClient(KVUri, credential);
  let retrievedSecret;
  retrievedSecret = await client.getSecret('Auth0Domain');
  keyVaultSecrets.auth0Domain = retrievedSecret.value;
  retrievedSecret = await client.getSecret('Auth0ClientId');
  keyVaultSecrets.auth0ClientId = retrievedSecret.value;
  retrievedSecret = await client.getSecret('Auth0Secret');
  keyVaultSecrets.auth0Secret = retrievedSecret.value;
  retrievedSecret = await client.getSecret('RecaptchaSiteKey');
  keyVaultSecrets.recaptchaSiteKey = retrievedSecret.value;
  retrievedSecret = await client.getSecret('RecaptchaSecretKey');
  keyVaultSecrets.recaptchaSecretKey = retrievedSecret.value;
  retrievedSecret = await client.getSecret('GoogleMapsApiKey');
  keyVaultSecrets.googleMapsApiKey = retrievedSecret.value;
  process.env.GOOGLE_MAPS_API_KEY = keyVaultSecrets.googleMapsApiKey;
  retrievedSecret = await client.getSecret('WodifyUser');
  keyVaultSecrets.wodifyUser = retrievedSecret.value;
  retrievedSecret = await client.getSecret('WodifyPassword');
  keyVaultSecrets.wodifyPassword = retrievedSecret.value;
  console.log(keyVaultSecrets);
  return keyVaultSecrets;
}

const keyVaultSecrets = getSecrets();

let config = {
  siteMetadata: {
    title: `Great State Strength and Conditioning`,
    description: `Great State web page`,
    author: `@KevinBurton`,
//    ...keyVaultSecrets
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

module.exports = config;