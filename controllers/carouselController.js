const items = require('../mock/items.json')

class carouselController {
    getItem(req, res) {
        const title = req.params.title
        const series = []

        items.map((item, key) => {
            if(item.carouseles == title)
                series.push(item)
        })

        return res.json({
            items: series
        })
    }
}

module.exports = carouselController