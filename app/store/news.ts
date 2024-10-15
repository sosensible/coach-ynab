import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', () => {
  const articles = ref([
    {
      id: 1,
      title: 'New Hymnals',
      slug: 'new-hymnals',
      description: 'Music is a gift created by God to help us emotionally and spiritually. Old hymnals are being replaced with new ones.',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvbmZlcmVuY2V8ZW58MHx8fHwxNjM2NjY2NjY2&ixlib=rb-1.2.1&q=80&w=500',
      categories: ['Faith'],
      date: '2 days ago',
      comments: 12
    },
    {
      id: 2,
      title: 'Missions Conference',
      slug: 'missions-conference',
      description: 'Discover how to find and live your true purpose through this powerful sermon.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFya3xlbnwwfHx8fDE2MzY2NjY2NjY&ixlib=rb-1.2.1&q=80&w=500',
      categories: ['Purpose'],
      date: '1 week ago',
      comments: 5
    },
    {
      id: 3,
      title: 'Ark Visit',
      slug: 'ark-visit',
      description: 'A deep dive into understanding the grace of God and its impact on our lives.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFya3xlbnwwfHx8fDE2MzY2NjY2NjY&ixlib=rb-1.2.1&q=80&w=500',
      categories: ['Grace'],
      date: '3 hours ago',
      comments: 20
    },
    {
      id: 4,
      title: 'Fall Review',
      slug: 'fall-review',
      description: 'Learn how to pray effectively and the power it has to change your life.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFya3xlbnwwfHx8fDE2MzY2NjY2NjY&ixlib=rb-1.2.1&q=80&w=500',
      categories: ['Prayer'],
      date: '1 day ago',
      comments: 8
    }
  ])

  return {
    articles
  }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNewsStore, import.meta.hot))
}