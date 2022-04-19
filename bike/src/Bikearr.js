let Bikearr=[
    {
        "bikeModelName":"Bullet",
        "bikeVariant":"Classic",
        "bikeEngine":"350 CC",
        "bikeAverageMilage":40,
        "bikePrice":150000,
        "bikeQuantity":3,
        "bikeColor":["Red","Black","Gray"]
    },
    {
        "bikeModelName":"Bullet",
        "bikeVariant":"Classic",
        "bikeEngine":"500 CC",
        "bikeAverageMilage":40,
        "bikePrice":250000,
        "bikeQuantity":3,
        "bikeColor":["Red","Black","Gray"]
    },
    {
        "bikeModelName":"Bullet",
        "bikeVariant":"Classic",
        "bikeEngine":"550 CC",
        "bikeAverageMilage":40,
        "bikePrice":260000,
        "bikeQuantity":3,
        "bikeColor":["Red","Black","Gray"]
    }

]

export const Create=(obj)=>{
    Bikearr.push(obj)
    
}

export const List=()=>{
    return Bikearr
}

export const read=(index)=>{
    return Bikearr[index]
}

export const fetchExact=(name)=>{
    const tmp=Bikearr.filter((element)=>{
        return element.bikeModelName===name
    })
    return tmp[0]
}

export const alter=(place,data)=>{
    Bikearr[place]=data
}

export const del=(index)=>{
    Bikearr=Bikearr.filter((element, index1)=>{
        return index1!==index
    })
    return List()
  //  del(index)


}