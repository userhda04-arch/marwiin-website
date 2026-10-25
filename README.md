# WaveShield.xyz Website

This README will guide you on how to run the website in development and how to host it.

## Running the Website in Development

To run the WaveShield.xyz website in a development environment, follow these steps:

1. Make sure you have [Node.js](https://nodejs.org/) installed on your system.
   
2. Clone this repository to your local machine or download the source code.

3. Open your terminal/command prompt and navigate to the project directory.

4. Install the project dependencies by running:

   ```shell
   npm install
   ```

5. Once the dependencies are installed, you can start the development server with the following command:

   ```shell
   npm run dev
   ```

6. After running the command, the development server will start, and you will see output indicating the server's address (usually http://localhost:5173). Open your web browser and navigate to this address to view the website in development mode. The website will automatically reload as you make changes to the source code.

## Hosting the Website

To host the WaveShield.xyz website, follow these steps:

1. Build the production-ready version of the website by running:

   ```shell
   npm run build
   ```

    This command will generate an optimized and minified version of the website in the `dist` folder.

2. Upload the contents of the dist folder to your web hosting server or domain hosting service. You can use FTP, SFTP, or any other preferred method for uploading files to your server.

3. Ensure that the main entry point for your website is set to index.html. This is usually the default configuration, but make sure your web server is configured to serve index.html as the main page for your domain.

4. Once the files are uploaded and the server is configured, access your website by navigating to your domain name in a web browser. The website should now be live and accessible to visitors.

That's it! You have successfully run the WaveShield.xyz website in development mode and hosted it for public access. If you encounter any issues or have further questions, please contact me.