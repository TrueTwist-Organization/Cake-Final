import fs from 'fs';
import Replicate from 'replicate';

const token = "r8_5Qokh5KArgXTK0UGvefSZD8VRNVeR3S3SP2TY";
const replicate = new Replicate({ auth: token });

async function run() {
  const filePath = "images/Baby Shower/Cloud Nine Baby Cake/Milk & Honey.png";
  if (!fs.existsSync(filePath)) {
    console.log("File not found");
    return;
  }
  
  const base64Data = fs.readFileSync(filePath, { encoding: 'base64' });
  const dataUri = `data:image/png;base64,${base64Data}`;

  console.log("Starting prediction...");
  try {
      const output = await replicate.run(
        "zylim0702/remove-bg-api:s230u201a1v6q7qq58bnt8t07u", // wait, what's a good rembg?
        {
          input: {
            image: dataUri
          }
        }
      ).catch(async () => {
          // fallback to lucataco/remove-bg
          return await replicate.run(
              "lucataco/remove-bg:95fcc2a26d3899cd6c2691c900465aaeff466285a65c14638cc5f36f34befaf1",
              {
                  input: { image: dataUri }
              }
          );
      });

      console.log("Output URL: ", output);
      
      if (output) {
          const res = await fetch(output);
          const buffer = await res.arrayBuffer();
          fs.writeFileSync(filePath, Buffer.from(buffer));
          console.log("Saved transparent image!");
      }
  } catch(e) {
      console.log("Error:", e);
  }
}
run();
