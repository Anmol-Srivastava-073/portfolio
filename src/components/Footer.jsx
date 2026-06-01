function Footer() {
  return (
    <footer className="text-center py-8 border-t border-primary/10 mt-auto bg-white/30 backdrop-blur-sm relative z-10">
      <p className="text-sm text-textMuted font-medium">
        © {new Date().getFullYear()} Anmol Srivastava. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
