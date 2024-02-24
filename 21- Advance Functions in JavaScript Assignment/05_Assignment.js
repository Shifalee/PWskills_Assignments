/*You are building a shipping application. Write a program that takes the type of package ("standard","express",or "overnight") and uses a switch statement to calculate and print the estimated delivery time based an the package type.For example "standard" might take 3-5 days,"express"1-2 days, and "overnight" would be delivered the next day.*/

function calculateDeliveryTime(packageType) {
    let deliveryTime;
    
    switch(packageType) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "next day";
            break;
        default:
            deliveryTime = "Unknown package type";
    }
    
    return deliveryTime;
}

const packageTypes = ["standard", "express", "overnight", "unknown"];
packageTypes.forEach(packageType => {
    console.log(`Package type: ${packageType}, Estimated delivery time: ${calculateDeliveryTime(packageType)}`);
});
