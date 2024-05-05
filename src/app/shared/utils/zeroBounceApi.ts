const baseUrl = "https://api.zerobounce.net/v2";
type ZeroBounceResponse = any;

export const validateEmail = async ({
    email,
  }: {
    email: string;
  }): Promise<ZeroBounceResponse> => {
    const uri = `${baseUrl}/validate?api_key=${process.env.ZEROBOUNCE_API_KEY}&email=${email}`;
    try{
        const response = await fetch(uri,{method: "GET"});
        if(!response.ok){
            throw new Error("Error validating email" + response.statusText);
        }
        const data: ZeroBounceResponse = await response.json();
        return data;
    }catch(e){
        console.log(e);
    }
}

