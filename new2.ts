// import * as http from 'http';
// import * as url from 'url';

// // Define data structures for user activity from different platforms
// interface SocialMediaActivity {
//   platform: string;
//   activity: string;
// }

// interface User {
//   id: number;
//   name: string;
//   activities: SocialMediaActivity[];
// }

// // Sample user data
// const users: User[] = [
//   {
//     id: 1,
//     name: 'Alice',
//     activities: [
//       { platform: 'facebook', activity: 'Posted a photo' },
//       { platform: 'twitter', activity: 'Tweeted a message' },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Bob',
//     activities: [
//       { platform: 'twitter', activity: 'Retweeted a post' },
//     ],
//   },
// ];

// const port = 3000;

// const server = http.createServer((req, res) => {
//   const { method, url: reqUrl } = req;
//   const parsedUrl = url.parse(reqUrl || '', true);

//   // Set response headers
//   res.setHeader('Content-Type', 'application/json');
//   let status = 404;
//   let result = { success: false, message: 'Not Found', data: null };

//   if (method === 'GET' && parsedUrl.pathname === '/user-activity') {
//     // Extract the user ID from the query parameters
//     const userId = parseInt(parsedUrl.query.userId as string, 10);

//     // Find the user by ID in the sample data
//     const user = users.find((u) => u.id === userId);

//     if (user) {
//       status = 200;
//       result = { success: true, message: 'Successful', data: user.activities };
//     }
//   }

//   // Send the response
//   res.writeHead(status);
//   res.end(JSON.stringify(result));
// });

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
