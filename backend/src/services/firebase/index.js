var serviceAccount = require("../config/firebase-key.json"); 

const BUCKET = "senai-overflow2.appspot.com"; 

admin.initializeApp({ 

  credential: admin.credential.cert( 

    process.env.FIREBASE_PRIVATE_KEY 

      ? { 

          type: "service_account", 

          project_id: "senai-overflow", 

          private_key_id: "73066f27e33601b0035117947f795a484b773efe", 

          private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"), 

          client_email: process.env.FIREBASE_CLIENT_EMAIL, 

          client_id: "105469033790114328493", 

          auth_uri: "https://accounts.google.com/o/oauth2/auth", 

          token_uri: "https://oauth2.googleapis.com/token", 

          auth_provider_x509_cert_url: 

            "https://www.googleapis.com/oauth2/v1/certs", 

          client_x509_cert_url: 

            "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-k09tb%40senai-overflow.iam.gserviceaccount.com", 

        } 

      : serviceAccount 

  ), 

  storageBucket: BUCKET, 

}); 