abstract class TakePhoto{
    constructor(
        public cameMode: string,
        public filter: string,
    ) { }
    
    abstract getSepia(): void
    getReelTime(): number{
        // some complex calculation
        return 10;
    }
}

class Instagram extends TakePhoto {
    constructor(public cameMode: string,
        public filter: string,
        public burst: number) { 
        super(cameMode, filter);
    }
    getSepia(): void { 
        console.log("Getting Sepia")
    }
}

const amit = new Instagram("portrait", "normal", 4)

amit.getReelTime();