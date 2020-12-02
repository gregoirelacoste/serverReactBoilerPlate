import SibApiV3Sdk from "sib-api-v3-sdk";

// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKey.apiKeyPrefix['api-key'] = "Token"

const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDING_BLUE_API_KEY;

const sendinBlueApi = new SibApiV3Sdk.TransactionalEmailsApi();

export default sendinBlueApi.sendTransacEmail;
