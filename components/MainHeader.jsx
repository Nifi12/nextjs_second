import Link from 'next/link'
import classes from './MainHeader.module.css';
export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">NextNews</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/news">News</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}