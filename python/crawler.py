import requests
from bs4 import BeautifulSoup

def fetch_articles_from_website(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')
        articles = soup.find_all('article')
        for article in articles:
            # Extract article data
            title = article.find('h1').text
            link = article.find('a')['href']
            summary = article.find('p').text
            print(f"Title: {title}, Link: {link}, Summary: {summary}")
    else:
        print(f"Failed to access {url}")

if __name__ == '__main__':
    fetch_articles_from_website('https://example.com/news')
