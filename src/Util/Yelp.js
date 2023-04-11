const apiKey = '3gmu5uVRP_uikdQaLqN1FwE4d0ErGW51-X68trWp6dVfgg9fH6b8XWrWzuU2Xn90WT70mmCaCqyt7yVTRsQjl3VlIhxve-hHjWZCEk0QyctyR2JJhPZ12MFHsoA1ZHYx'

let Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }).then(response => {
                return response.json()
            }).then(jsonResponse => {
                if (jsonResponse.business) {
                    return jsonResponse.business.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.imageSrc,
                            name: business.name,
                            address: business.address,
                            city: business.city,
                            state: business.state,
                            zipCode: business.zipCode,
                            category: business.category,
                            rating: business.rating,
                            reviewCount: business.reviewCount
                        }
                    })
                }
            });
    }
}

export default Yelp

