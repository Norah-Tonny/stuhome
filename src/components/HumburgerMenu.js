import styled from 'styled-components';

const Menu = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
`;

const MenuItem = styled.a`
  display: block;
  padding: 5px;
  color: #333;
  text-decoration: none;

  &:hover {
    background-color: #ddd;
  }
`;

// Inside the HamburgerMenu component
return (
  <div className='menu'>
    <GiHamburgerMenu size={24} onClick={toggleMenu} />
    {isOpen && (
      <Menu>
        <MenuItem href="#">Login</MenuItem>
        <MenuItem href="#">Sign in</MenuItem>
        <MenuItem href="#">Help</MenuItem>
      </Menu>
    )}
  </div>
)