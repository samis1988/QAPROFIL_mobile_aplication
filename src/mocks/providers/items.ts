import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Roof Sheet",
    "profilePic": "assets/img/qaprofil/roof_pannel/roof-sheet.png",
    "about": 'RoofsheetPage' ,
  };


  constructor() {
    let items = [
      {
        "name": "Roof Sheet",
        "profilePic": "assets/img/qaprofil/roof_pannel/roof-sheet.png",
        about: 'RoofsheetPage'
      },
      {
        "name": "Wave Roof",
        "profilePic": "assets/img/qaprofil/roof_pannel/wave.png",
        "about": 'WaveroofPage'
      },
      {
        "name": "ARC Roof",
        "profilePic": "assets/img/qaprofil/roof_pannel/arc_roof.png",
        "about": "ArcroofPage"
      },
      {
        "name": "Ridge Cap",
        "profilePic": "assets/img/qaprofil/roof_pannel/ridge_cap.png",
        "about": "RidgecapPage"
      },
      {
        "name": "Down Spout",
        "profilePic": "assets/img/qaprofil/roof_pannel/downspot1.png",
        "about": "DownspoutPage"
      },
      {
        "name": "Water Gutter",
        "profilePic": "assets/img/qaprofil/roof_pannel/water_gutter.bmp",
        "about": "WatergaterPage"
      },
      {
        "name": "Lintel",
        "profilePic": "assets/img/qaprofil/lintel.jpg",
        "about": "LintelPage"
      },
      {
        "name": "Perimeter Angle",
        "profilePic": "assets/img/qaprofil/perimeterangle.png",
        "about": "PerimeterPage"
      },
      {
        "name": "Furring Channel",
        "profilePic": "assets/img/qaprofil/furring_channel.png",
        "about": "FurringChannelPage"
      },
      {
        "name": "Main Channel",
        "profilePic": "assets/img/qaprofil/main.png",
        "about": "MainchannelPage"
      },
      {
        "name": "Angle Bead",
        "profilePic": "assets/img/qaprofil/angle.png",
        "about": "AnglebeadPage"
      },
      
      {
        "name": "Runner",
        "profilePic": "assets/img/qaprofil/runner.png",
        "about": "RunnerPage"
      },
      {
        "name": "J-Trim",
        "profilePic": "assets/img/qaprofil/angle.png",
        "about": "JtrimPage"
      },
      {
        "name": "Stud LES",
        "profilePic": "assets/img/qaprofil/stud_les.png",
        "about": "StudlesPage"
      },
      {
        "name": "V Section",
        "profilePic": "assets/img/qaprofil/vsection.png",
        "about": "VsectionPage"
      },
      {
        "name": "Qap Carrier",
        "profilePic": "assets/img/qaprofil/qap_carrier.png",
        "about": "QapcarrierPage"
      }
      
      ,
      {
        "name": "Perimeter Angle",
        "profilePic": "assets/img/qaprofil/p_a_alum.png",
        "about": "PerimeteranglePage"
      },
      {
        "name": "U Channel",
        "profilePic": "assets/img/qaprofil/u_channel.png",
        "about": "UchannelPage"
      },
      {
        "name": "84R and Joints Strips",
        "profilePic": "assets/img/qaprofil/84r/1.png",
        "about": "StripsjointPage"
      },
      {
        "name": "Qap 50 Strips",
        "profilePic": "assets/img/qaprofil/qap50/1.png",
        "about": "QapstripsPage"
      },
      {
        "name": "Qap 100 - 200 Strips",
        "profilePic": "assets/img/qaprofil/qap100-200/1.png",
        "about": "QaponetwoPage"
      }
      ,
      {
        "name": "T- Bar",
        "profilePic": "assets/img/qaprofil/tbar/4.png",
        "about": "TbarPage"
      }
      ,
      {
        "name": "Semi-Round Panel",
        "profilePic": "assets/img/qaprofil/bambo/1.jpg",
        "about": "SemiroundPage"
      },
      {
        "name": "Photo Gallery",
        "profilePic": "assets/img/qaprofil/gallery.png",
        "about": "GalleryalumPage"
      }
      ,
      {
        "name": "Light Gauge Steel Cabins",
        "profilePic": "assets/img/qaprofil/cabins.jpg",
        "about": "LightgaugesteelPage"
      }
      
      
      
      
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
