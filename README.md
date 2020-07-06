# 07-04 React Router Photo Gallery - Photography Portfolio Demo

Visit the live site: https://github.com/Breadkenty/07-04-react-router-photo-gallery

# Assignment Overview:

Get to know React Router by building yourself a small photo gallery site.

## Objectives

- Adding dependencies to your React Project
- Navigating JSON data structures
- Using the React Router library
- Using parameters in React Router

## Requirements

Using the JSON data below as a starter, build a photo gallery app. Here's
[an example](https://things-i-like.netlify.com/).

```json
{
  "pandas": {
    "title": "Panda Bears",
    "description": "Pandas are bears native to south-central China, and are objectively the cutest animals on earth.",
    "photos": [
      {
        "title": "Panda Waving",
        "imageURL": "https://things-i-like.netlify.com/images/baby_panda.jpg",
        "sourceURL": "https://codeburst.io/pandas-for-data-stuff-code-challenge-7972207a8294"
      },
      {
        "title": "Großer Panda im Ocean Park, Hongkong",
        "imageURL": "https://things-i-like.netlify.com/images/grosser_panda.jpg",
        "sourceURL": "https://en.wikipedia.org/wiki/Giant_panda"
      },
      {
        "title": "Wild pandas get a boost; the iconic species has been upgraded from 'endangered' to 'vulnerable.'",
        "imageURL": "https://things-i-like.netlify.com/images/tree_panda.png",
        "sourceURL": "https://www.worldwildlife.org/magazine/issues/spring-2017/articles/wild-pandas-get-a-boost--2"
      },
      {
        "title": "Sacred Warrior, by Adrian Smith",
        "imageURL": "https://things-i-like.netlify.com/images/rising_sun.png",
        "sourceURL": "https://www.artstation.com/adrian-smith/albums/1298277"
      }
    ]
  },
  "miniatures": {
    "title": "Miniature Painting",
    "description": "I enjoy painting miniatures from board games. I've been painting since early 2018, here's some of my work.",
    "photos": [
      {
        "title": "City of Kings",
        "imageURL": "https://things-i-like.netlify.com/images/city_of_kings.jpg",
        "sourceURL": "https://www.instagram.com/p/Btv-0uYH8Xc"
      },
      {
        "title": "Blood Rage, Ram Clan",
        "imageURL": "https://things-i-like.netlify.com/images/ram_clan.jpg",
        "sourceURL": "https://www.instagram.com/p/BjRKLqYh4gK"
      },
      {
        "title": "Cormac the Druid, work in progress",
        "imageURL": "https://things-i-like.netlify.com/images/cormac.jpg",
        "sourceURL": "https://www.instagram.com/p/BnW2QrWDaky"
      }
    ]
  }
}
```

Save this as a JSON file in your project and import it.

If you hot-link photos from the internet, be sure to include a valid link back to the source.

### Explorer Mode

- [x] You should have at least 4 components: `App`, `CategoryList`, `PhotoList`, `PhotoDetail`.
- [x] On the home page, your category list should render the title of each category and link using the key. For examples "Panda Bears" should link to `/pandas`
- [x] Render each photo in the given category on the photo list page with a thumbnail-sized version of your photos.
- [x] Render a large version of the photo on the photo details page.

- [x] Customize the given data to include your own photos and categories.
- [x] Add bread crumb navigation, as seen in the example.
- [x] Add a thumbnail to the first photo in each category to the home page, as seen in the example.

### Adventure Mode

- Choose one of the following:
  - [ ] Find an external API for a photo-sharing site (such as Flickr) and use data from the API rather than the given JSON file.
  - [ ] Create a C# backend to produce a list of categories with titles and descriptions, each category should have many photos. Create an API for this, deploy it, and then restructure your React front end to use this API.

## Additional Resources

- [React Router Documentation](https://reacttraining.com/react-router/web/guides/quick-start)
