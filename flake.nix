{
  description = "Nicks React development environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-24.05";
    utils.url = "github:numtide/flake-utils";
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };

  outputs = { self, nixpkgs, utils, ... }:
    utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = import nixpkgs { inherit system; };
          nodejs = pkgs.stdenv.mkDerivation {
            name = "nodejs-20.9.0";
            src = pkgs.fetchurl {
              url = "https://nodejs.org/dist/v20.9.0/node-v20.9.0-linux-x64.tar.xz";
              sha256 = "9033989810bf86220ae46b1381bdcdc6c83a0294869ba2ad39e1061f1e69217a";
            };
            buildInputs = [ pkgs.glibc pkgs.libstdcxx5 ];
            installPhase = ''
              mkdir -p $out/bin
              cp -r * $out/bin
            '';
          };
          yarn = pkgs.yarn.override { inherit nodejs; };
        in
        {
          devShell = pkgs.mkShell {
            buildInputs = with pkgs; [
              # Nix env tools
              nixpkgs-fmt

              # Node.js env tools
              nodejs
              yarn
            ];
            shellHook = ''
              # Add node_modules/.bin to path for convenience
              export PATH="$PWD/node_modules/.bin/:$PATH"
              echo "Nicks React development environment"
            '';
          };
        }
      );
}
