export default function Home() {
  const forceVisibleStyle: any = {
    padding: '2rem',
    display: 'block !important',
    visibility: 'visible !important',
    opacity: '1 !important',
    overflow: 'visible !important',
    height: 'auto !important'
  };

  const forceVisibleElementStyle: any = {
    display: 'block !important',
    visibility: 'visible !important',
    opacity: '1 !important'
  };

  const forceListItemStyle: any = {
    display: 'list-item !important',
    visibility: 'visible !important',
    opacity: '1 !important'
  };

  return (
    <main style={forceVisibleStyle}>
      <h1 style={forceVisibleElementStyle}>
        CondoFlow - Multi-Tenant Property Management
      </h1>
      <p style={forceVisibleElementStyle}>
        Welcome to CondoFlow, the professional property and building management system.
      </p>
      <p style={forceVisibleElementStyle}>
        This application is currently under development.
      </p>
      <div style={{ marginTop: '2rem', ...forceVisibleStyle }}>
        <h2 style={forceVisibleElementStyle}>
          Features Coming Soon:
        </h2>
        <ul style={forceVisibleElementStyle}>
          <li style={forceListItemStyle}>
            Multi-tenant property management
          </li>
          <li style={forceListItemStyle}>
            Building maintenance tracking
          </li>
          <li style={forceListItemStyle}>
            Damage reporting system
          </li>
          <li style={forceListItemStyle}>
            E-commerce integration
          </li>
          <li style={forceListItemStyle}>
            User authentication
          </li>
        </ul>
      </div>
    </main>
  )
}
