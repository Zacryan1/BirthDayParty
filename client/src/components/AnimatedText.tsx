interface AnimatedTextProps {
  text: string;
  isRainbow?: boolean;
  isCelebrating?: boolean;
}

export default function AnimatedText({ text, isRainbow = false, isCelebrating = false }: AnimatedTextProps) {
  const letters = text.split('').map((char, i) => ({ char, id: i }));

  return (
    <div className="inline-flex">
      {letters.map(({ char, id }) => (
        <span
          key={id}
          className={`inline-block ${
            isRainbow ? 'animate-text-rainbow' : ''
          } ${
            isCelebrating ? 'animate-celebration' : ''
          }`}
          style={{
            animationDelay: `${id * 0.1}s`,
            animationDuration: isRainbow ? '2s' : '1s'
          }}
          data-testid={`text-char-${id}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}