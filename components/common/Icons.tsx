export function Play({ className }: { className?: string }) {
    return (
        <svg
            width="43"
            height="44"
            className={className}
            viewBox="0 0 43 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M40.1932 26.4226C43.0862 24.1841 43.0862 19.8165 40.1932 17.5781C31.4504 10.8131 21.6877 5.48103 11.2707 1.7813L9.36766 1.1054C5.72687 -0.187672 1.8812 2.27563 1.38832 6.03389C0.0111861 16.5345 0.0111857 27.4661 1.38832 37.9668C1.8812 41.725 5.72686 44.1883 9.36766 42.8953L11.2707 42.2194C21.6877 38.5196 31.4504 33.1875 40.1932 26.4226Z"
                fill="currentColor"
            />
        </svg>
    );
}

export function ArrowRight({ className }: { className?: string }) {
    return (
        <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0.5 7.07024H13.7351L10.5861 10.1722L11.9224 11.5L17.5 6.00572L11.9224 0.5L10.5861 1.82778L13.7235 4.90687H0.5V7.07024Z"
                fill="currentColor"
            />
        </svg>
    );
}
