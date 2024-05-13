"use client"
import Card from '@/app/ui/card-admin';


export default function Home() {
  // Dummy data for the card
  const cardData = {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'Sample Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  return (
    <main>
      <Card/>
    </main>
  );
}

