const token = "r8_5Qokh5KArgXTK0UGvefSZD8VRNVeR3S3SP2TY";
async function run() {
    try {
        console.log("Starting prediction...");
        const res = await fetch("https://api.replicate.com/v1/models/black-forest-labs/flux-schnell/predictions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Prefer": "wait"
            },
            body: JSON.stringify({
                input: {
                    prompt: "A delicious classic chocolate drip birthday cake, 4k food photography, plain background"
                }
            })
        });
        
        if(!res.ok) {
            console.error("Error:", await res.text());
            return;
        }
        const data = await res.json();
        console.log("Success:", JSON.stringify(data, null, 2));
    } catch(err) {
        console.error("Fetch Exception:", err);
    }
}

run();
