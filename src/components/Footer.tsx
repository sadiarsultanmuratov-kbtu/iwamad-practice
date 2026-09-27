type FooterProps = {
    author: string;
    year: number;
};

function Footer({ author, year }: FooterProps) {
    return (
        <footer className="site-footer">
            <p>&copy; {year} {author}</p>
        </footer>
    );
}

export default Footer;