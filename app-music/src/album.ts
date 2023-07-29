export class Album {
    constructor(
      public id : string,
      public ref: string,
      public name: string, 
      public title : string,
      public description : string, 
      public duration : number,
      public status: string, 
      public url? : string | undefined,
      public tags? :Array<string> | undefined,
      public like? : string | undefined,
      ){}
};

export class List {
    constructor(
        public id: string,
        public list: string[],
   ){
     this.id = id;
     this.list= [] 
   }

};

export interface  SortAlbumCallback {
    (a: Album, b: Album): number
  }



