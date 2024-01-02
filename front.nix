{ pkgs ? import <nixpkgs> {} }:
  let
    nodeDependencies = (pkgs.callPackage ./front/default.nix {}).nodeDependencies;
    stdenv = pkgs.stdenv;
    nodejs = pkgs.nodejs;
    tsc = pkgs.typescript;
  in

  stdenv.mkDerivation {
    name = "duckonaut.dev-front";
    src = ./front;
    buildInputs = [nodejs tsc];
    buildPhase = ''
      ln -s ${nodeDependencies}/lib/node_modules ./node_modules
      export PATH="${nodeDependencies}/bin:$PATH"
      echo "PATH: $PATH"

      # Build the distribution bundle in "dist"
      npm run build
      cp -r dist $out/
    '';
  }
