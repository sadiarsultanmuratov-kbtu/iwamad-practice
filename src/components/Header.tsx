type HeaderProps = {
    name: string;
    tagline: string;
};

function Header({ name, tagline }: HeaderProps) {
    return (
        <header className="site-header">
            <h1>{name}</h1>
            <p className="tagline">{tagline}</p>
        </header>
    );
}

export default Header;