const withDesktopOnlyHoc = (WrappedComponent) => {
  if (window.innerWidth > 450) return WrappedComponent

  return () => <></>
}

export default withDesktopOnlyHoc
