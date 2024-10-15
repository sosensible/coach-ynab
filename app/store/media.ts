import { defineStore } from 'pinia'

export const useMediaStore = defineStore('media', () => {
  const resources = ref([
  {
    id: 1,
    title: 'The Power of Faith',
    slug: 'the-power-of-faith',
    description: 'An inspiring sermon on the importance of faith in our daily lives.',
    image: 'https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    categories: ['Sermon'],
    date: '2 days ago',
    comments: 12
  },
  {
    id: 2,
    title: 'Living a Life of Purpose',
    slug: 'living-a-life-of-purpose',
    description: 'Discover how to find and live your true purpose through this powerful sermon.',
    image: 'https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    categories: ['Sermon'],
    date: '1 week ago',
    comments: 5
  },
  {
    id: 3,
    title: 'The Grace of God',
    slug: 'the-grace-of-god',
    description: 'A deep dive into understanding the grace of God and its impact on our lives.',
    image: 'https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    categories: ['Sermon'],
    date: '3 hours ago',
    comments: 20
  },
  {
    id: 4,
    title: 'The Power of Prayer',
    slug: 'the-power-of-prayer',
    description: 'Learn how to pray effectively and the power it has to change your life.',
    image: 'https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    categories: ['Sermon'],
    date: '1 day ago',
    comments: 8
  }
])

  return {
    resources
  }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMediaStore, import.meta.hot))
}