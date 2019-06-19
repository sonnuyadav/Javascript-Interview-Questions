//Question: Call An Asynchronous Javascript Function Synchronously
async function getTimeStamp1(time,time2) {
    setTimeout(()=>{
        console.log("Console.log 1000")
        time(time2);
    },1000)
  }

  async function getTimeStamp500(time2) {
    setTimeout(()=>{
        console.log("Console.log 500")
        time2();
    },500)
  }

  async function getTimeStamp100() {
    setTimeout(()=>{
        console.log("Console.log 100")
    },100)
  }

const printRes = async() =>{   
    await getTimeStamp1(getTimeStamp500,getTimeStamp100);     
}
 printRes();
