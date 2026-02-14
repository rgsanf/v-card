"use client";

const SONGS = [
  { title: "At Last", artist: "Etta James", emoji: "🎷" },
  { title: "Can\u2019t Help Falling in Love", artist: "Elvis Presley", emoji: "🎸" },
  { title: "Thinking Out Loud", artist: "Ed Sheeran", emoji: "🎵" },
  { title: "All of Me", artist: "John Legend", emoji: "🎹" },
  { title: "A Thousand Years", artist: "Christina Perri", emoji: "🎻" },
  { title: "Make You Feel My Love", artist: "Adele", emoji: "🎤" },
  { title: "I Will Always Love You", artist: "Whitney Houston", emoji: "💿" },
  { title: "Perfect", artist: "Ed Sheeran", emoji: "🎶" },
  { title: "Unchained Melody", artist: "The Righteous Brothers", emoji: "🎺" },
  { title: "Something", artist: "The Beatles", emoji: "🎸" },
  { title: "Wonderful Tonight", artist: "Eric Clapton", emoji: "🌙" },
  { title: "The Way You Look Tonight", artist: "Frank Sinatra", emoji: "🎩" },
];

export default function LovePlaylist() {
  return (
    <div className="max-w-lg mx-auto">
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #2a001220, #1a000810)",
          border: "1px solid #dc143c12",
        }}
      >
        {/* Playlist header */}
        <div
          className="p-5 text-center"
          style={{
            background: "linear-gradient(135deg, #3d001520, #5c002015)",
            borderBottom: "1px solid #dc143c10",
          }}
        >
          <p className="text-3xl mb-2">🎵</p>
          <p
            className="text-xl"
            style={{
              fontFamily: "var(--font-great-vibes), cursive",
              color: "var(--love-pink)",
            }}
          >
            Our Love Playlist
          </p>
          <p className="text-[var(--love-blush)] text-xs opacity-40 mt-1">
            {SONGS.length} songs of pure love
          </p>
        </div>

        {/* Songs */}
        <div className="divide-y divide-[#dc143c08]">
          {SONGS.map((song, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-5 py-3 transition-all duration-300 hover:bg-[#3d001510]"
            >
              <span className="text-xs text-[var(--love-blush)] opacity-30 w-5 text-right tabular-nums">
                {i + 1}
              </span>
              <span className="text-lg flex-shrink-0">{song.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[var(--love-blush)] text-sm truncate">
                  {song.title}
                </p>
                <p className="text-[var(--love-blush)] text-xs opacity-40 truncate">
                  {song.artist}
                </p>
              </div>
              <span className="text-[var(--love-red)] opacity-40 text-xs flex-shrink-0">
                ♥
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="p-4 text-center"
          style={{
            borderTop: "1px solid #dc143c10",
          }}
        >
          <p className="text-[var(--love-blush)] text-xs italic opacity-30">
            press play on love
          </p>
        </div>
      </div>
    </div>
  );
}
